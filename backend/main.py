from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.search import router as search_router

app = FastAPI(title="Scholara AI API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(search_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to Scholara AI Platform"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
