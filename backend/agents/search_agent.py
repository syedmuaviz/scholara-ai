import os
from typing import List
from pydantic import BaseModel, Field
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.tools import DuckDuckGoSearchResults
from dotenv import load_dotenv

load_dotenv()

class ScholarshipResult(BaseModel):
    title: str = Field(description="Name of the scholarship")
    provider: str = Field(description="Organization providing the scholarship")
    amount: str = Field(description="Amount or funding provided")
    deadline: str = Field(description="Deadline for application")
    eligibility: str = Field(description="Eligibility criteria summary")
    link: str = Field(description="URL to apply or get more information")

class SearchResponse(BaseModel):
    scholarships: List[ScholarshipResult] = Field(description="List of extracted scholarships")

def search_latest_scholarships(query: str = "latest international scholarships for university students") -> List[ScholarshipResult]:
    # Ensure OPENAI_API_KEY is present
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key or api_key == "your_openai_api_key_here":
        # Return mock data if no key, so frontend doesn't break while user is setting it up
        return [
            ScholarshipResult(
                title="Global Excellence Scholarship",
                provider="Scholara Foundation",
                amount="$10,000",
                deadline="2026-08-15",
                eligibility="International undergraduate students with 3.5+ GPA",
                link="https://example.com"
            ),
            ScholarshipResult(
                title="STEM Future Leaders Award",
                provider="Tech Innovators Inc.",
                amount="Full Tuition",
                deadline="2026-09-01",
                eligibility="Students pursuing computer science or engineering degrees",
                link="https://example.com/stem"
            )
        ]

    # Initialize DuckDuckGo Search
    search = DuckDuckGoSearchResults(num_results=5)
    search_results = search.run(query)

    # Initialize LLM
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
    structured_llm = llm.with_structured_output(SearchResponse)

    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are an expert scholarship finder agent. Extract detailed information about scholarships from the following search results. Ensure all fields are filled. If a link is missing, use 'Not provided'."),
        ("user", "Search Results:\n{results}\n\nExtract the scholarships into a structured list.")
    ])

    chain = prompt | structured_llm
    
    response = chain.invoke({"results": search_results})
    return response.scholarships
