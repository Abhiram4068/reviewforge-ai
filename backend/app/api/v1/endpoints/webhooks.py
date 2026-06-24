from fastapi import APIRouter, Request, Header, HTTPException, status
from app.core.config import settings
from app.core.logging import logger

router = APIRouter()

def verify_webhook_signature(payload: bytes, signature: str) -> bool:
    """Verifies that the webhook payload matches the GitHub webhook secret.
    
    Placeholder for actual HMAC-SHA256 signature verification.
    """
    if not settings.GITHUB_WEBHOOK_SECRET:
        logger.warning("GITHUB_WEBHOOK_SECRET is not configured. Skipping verification.")
        return True
    
    # Real signature validation logic goes here
    return True

@router.post("/github", status_code=status.HTTP_202_ACCEPTED)
async def github_webhook_receiver(
    request: Request,
    x_github_event: str = Header(..., description="The type of event received from GitHub"),
    x_hub_signature_256: str = Header(..., description="The HMAC signature of the payload")
):
    """Receiver for GitHub App webhooks (e.g. pull_request events).
    
    Validates signature, extracts action information, and triggers review task.
    """
    payload_bytes = await request.body()
    
    if not verify_webhook_signature(payload_bytes, x_hub_signature_256):
        logger.error("GitHub webhook signature verification failed.")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, 
            detail="Invalid webhook signature"
        )
    
    logger.info(f"Received GitHub webhook event: {x_github_event}")
    
    # Event routing logic will go here in feature/github-webhooks branch.
    # We will trigger celery_app.send_task("tasks.process_pr_review", args=[...])
    
    return {"message": "Webhook received and accepted"}
