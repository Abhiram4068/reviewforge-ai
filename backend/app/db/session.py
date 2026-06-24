from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from typing import Generator
from app.core.config import settings

# Engine configuration
# Ensure SQLite compatibility (needs check_same_thread parameter)
connect_args = {}
if settings.DATABASE_URL.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

engine = create_engine(
    settings.DATABASE_URL,
    connect_args=connect_args,
    pool_pre_ping=True  # Resilient database connection validation
)

# Session factory configuration
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

def get_db() -> Generator[Session, None, None]:
    """Dependency generator for database sessions.
     Ensures that sessions are properly closed after request fulfillment.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
