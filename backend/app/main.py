from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.core.config import settings
from app.core.logging import logger
from app.api.v1.router import api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Automated AI Pull Request Review Assistant",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS middleware configuration
# Allows connection from local development react app and production origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict this in production settings
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Versioned API routes registration
app.include_router(api_router, prefix=settings.API_V1_STR)

# --- Exception Handling ---

@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request: Request, exc: StarletteHTTPException):
    """Global handler for HTTPExceptions."""
    logger.warning(f"HTTP Exception on {request.url.path}: {exc.detail}")
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail, "status_code": exc.status_code},
    )

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    """Global handler for Pydantic Request Validation Errors."""
    logger.warning(f"Validation Exception on {request.url.path}: {exc.errors()}")
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "detail": "Validation error in request parameters",
            "errors": exc.errors()
        },
    )

@app.exception_handler(Exception)
async def generic_exception_handler(request: Request, exc: Exception):
    """Global fallback handler for unhandled exceptions."""
    logger.error(f"Unhandled Exception on {request.url.path}: {str(exc)}", exc_info=True)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": "An internal server error occurred", "status_code": 500},
    )

@app.get("/")
def root_endpoint():
    """Root endpoint welcoming users and pointing to docs."""
    return {
        "message": f"Welcome to {settings.PROJECT_NAME}",
        "documentation": "/docs"
    }
