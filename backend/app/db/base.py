from sqlalchemy.orm import DeclarativeBase, declared_attr

class Base(DeclarativeBase):
    """Base class for all SQLAlchemy database models.
    Automatically generates lowercased table names from model class names.
    """
    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()
