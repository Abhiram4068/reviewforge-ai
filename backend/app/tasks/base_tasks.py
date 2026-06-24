import time
from app.tasks.celery_app import celery_app
from app.core.logging import logger

@celery_app.task(name="tasks.health_check_task")
def health_check_task() -> str:
    """A baseline health check Celery task to verify queue and worker functionality."""
    logger.info("Starting health check Celery task...")
    time.sleep(1)
    logger.info("Health check Celery task completed successfully.")
    return "ok"
