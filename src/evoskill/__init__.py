"""
🧬 EVOSKILL - Autonomous AI Skill Evolution Framework

The world's first open-source framework enabling LLMs to achieve recursive self-improvement
without weight updates. Built on SkillRL, TextGrad, and TrueSkill research.

This is Darwinian evolution for AI.
"""

from .modules import (
    EvolutionEngine,
    SkillBank,
    Skill,
    TextGradEngine,
    TrueSkillRater,
    DiscoveryModule,
    MissionController,
    SkillIncubator,
)

__version__ = "1.0.0"
__author__ = "EVOSKILL AI Research Team"

__all__ = [
    "EvolutionEngine",
    "SkillBank",
    "Skill",
    "TextGradEngine",
    "TrueSkillRater",
    "DiscoveryModule",
    "MissionController",
    "SkillIncubator",
]
