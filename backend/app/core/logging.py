import logging
import sys

def setup_logging():
    # Define log format
    log_format = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    
    # Configure root logger
    logging.basicConfig(
        level=logging.INFO,
        format=log_format,
        handlers=[
            logging.StreamHandler(sys.stdout)
        ]
    )
    
    # Optional: silence noisy third-party loggers if needed
    logging.getLogger("uvicorn.access").setLevel(logging.WARNING)
    logging.getLogger("sqlalchemy.engine").setLevel(logging.WARNING)
    
    logger = logging.getLogger("reviewforge")
    logger.setLevel(logging.INFO)
    logger.info("Logging configured successfully")

# Run log setup
setup_logging()
logger = logging.getLogger("reviewforge")
