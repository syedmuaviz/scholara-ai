from fastapi import APIRouter
from agents.search_agent import search_latest_scholarships, ScholarshipResult
from typing import List

router = APIRouter()

@router.get("/scholarships/search", response_model=List[ScholarshipResult])
async def search_scholarships(query: str = "latest international scholarships for university students"):
    """
    Search for latest scholarships using the Search Agent (DuckDuckGo + LLM).
    """
    results = search_latest_scholarships(query)
    return results
