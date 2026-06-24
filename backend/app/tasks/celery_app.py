from celery import Celery
from app.core.config import settings

# Initialize Celery app with Redis broker and result backend
celery_app = Celery(
    "reviewforge",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL
)

# Base Celery configuration
celery_app.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    timezone="UTC",
    enable_utc=True,
    # Configure task autodiscovery: points to the tasks directory packages
    imports=["app.tasks.base_tasks"],
)
