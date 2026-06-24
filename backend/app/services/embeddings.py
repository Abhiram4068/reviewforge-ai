from abc import ABC, abstractmethod
from typing import List

class BaseEmbeddingService(ABC):
    """Abstract Base Class defining the contract for embedding generation services."""
    
    @abstractmethod
    async def get_embedding(self, text: str) -> List[float]:
        """Generate a vector embedding for a single text string."""
        pass

    @abstractmethod
    async def get_embeddings(self, texts: List[str]) -> List[List[float]]:
        """Generate vector embeddings for a list of text strings."""
        pass
