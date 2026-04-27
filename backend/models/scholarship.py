from sqlalchemy import Column, Integer, String, Text, DateTime, Float
from sqlalchemy.sql import func
from database import Base

class Scholarship(Base):
    __tablename__ = "scholarships"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False, index=True)
    provider = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    eligibility_criteria = Column(Text, nullable=True)
    funding_amount = Column(String(100), nullable=True) # e.g. "$10,000" or "Full Tuition"
    deadline = Column(DateTime(timezone=True), nullable=True)
    country = Column(String(100), nullable=True)
    source_url = Column(String(500), nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
