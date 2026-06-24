from fastapi import APIRouter
from app.api.v1.endpoints import webhooks

api_router = APIRouter()

api_router.include_router(webhooks.router, prefix="/webhooks", tags=["Webhooks"])

@api_router.get("/health", tags=["Health"])
def health_check():
    """Health check endpoint to verify backend system status."""
    return {
        "status": "ok",
        "service": "ReviewForge AI API",
        "version": "1.0.0"
    }
