import os
from typing import Optional
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field

class Settings(BaseSettings):
    # App Settings
    PROJECT_NAME: str = "ReviewForge AI"
    API_V1_STR: str = "/api/v1"
    
    # Environment config
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )
    
    # Database Configuration
    # Defaults to a local SQLite file, with easy override to PostgreSQL via env
    DATABASE_URL: str = Field(
        default="sqlite:///./reviewforge.db",
        validation_alias="DATABASE_URL"
    )
    
    # Redis & Celery
    REDIS_URL: str = Field(
        default="redis://localhost:6379/0",
        validation_alias="REDIS_URL"
    )
    
    # JWT Settings
    JWT_SECRET: str = Field(
        default="supersecretjwtkeyforreviewforgeaiagent2026",
        validation_alias="JWT_SECRET"
    )
    JWT_ALGORITHM: str = Field(
        default="HS256",
        validation_alias="JWT_ALGORITHM"
    )
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    
    # GitHub Integration Settings
    GITHUB_APP_ID: Optional[str] = Field(
        default=None,
        validation_alias="GITHUB_APP_ID"
    )
    GITHUB_PRIVATE_KEY: Optional[str] = Field(
        default=None,
        validation_alias="GITHUB_PRIVATE_KEY"
    )
    GITHUB_WEBHOOK_SECRET: Optional[str] = Field(
        default=None,
        validation_alias="GITHUB_WEBHOOK_SECRET"
    )
    
    # AI Components Configuration
    ANTHROPIC_API_KEY: Optional[str] = Field(
        default=None,
        validation_alias="ANTHROPIC_API_KEY"
    )
    QDRANT_URL: Optional[str] = Field(
        default=None,
        validation_alias="QDRANT_URL"
    )
    QDRANT_API_KEY: Optional[str] = Field(
        default=None,
        validation_alias="QDRANT_API_KEY"
    )

# Instantiate settings
settings = Settings()
