import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  exoplanetLifeSearches_Skill_Data,
  solarSystemLifeSearches_Skill_Data,
  subsurfaceHabitats_Skill_Data,
} from './skills';

export const searchEnvironments_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'searchEnvironments',
  id: 'f2ee296d-7ca0-4318-a494-cb036f74b21b',
  name: {
    en: 'Search Environments',
    uk: 'Середовища пошуку життя',
    pl: 'Środowiska poszukiwania życia',
    es: 'Entornos de búsqueda de vida',
    fr: 'Milieux de recherche de vie',
    de: 'Umgebungen für die Suche nach Leben',
    pt: 'Ambientes de busca por vida',
    id: 'Lingkungan pencarian kehidupan',
    tr: 'Yaşam arama ortamları',
    zh: '生命搜寻环境',
    ja: '生命探査の環境',
    ko: '생명 탐사 환경',
    ar: 'بيئات البحث عن الحياة',
    hi: 'जीवन की खोज वाले पर्यावरण',
    he: 'סביבות לחיפוש חיים',
    vi: 'Môi trường tìm kiếm sự sống',
  },
  skills: {
    exoplanetLifeSearches: exoplanetLifeSearches_Skill_Data,
    solarSystemLifeSearches: solarSystemLifeSearches_Skill_Data,
    subsurfaceHabitats: subsurfaceHabitats_Skill_Data,
  },
  description: {
    methodological:
      'Search strategies differ for nearby worlds whose material can be sampled and distant worlds known mainly through remote measurements.',
    frontend: {
      en: 'Compare scientific methods for searching different worlds and environments for life.',
      uk: 'Порівнюй наукові методи пошуку життя в різних світах і середовищах.',
      pl: 'Porównaj naukowe metody poszukiwania życia w różnych światach i środowiskach.',
      es: 'Compara los métodos científicos para buscar vida en distintos mundos y entornos.',
      fr: 'Compare les méthodes scientifiques de recherche de vie dans différents mondes et environnements.',
      de: 'Vergleiche wissenschaftliche Methoden zur Suche nach Leben auf verschiedenen Himmelskörpern und in unterschiedlichen Umgebungen.',
      pt: 'Compare métodos científicos para buscar vida em diferentes mundos e ambientes.',
      id: 'Bandingkan metode ilmiah untuk mencari kehidupan di berbagai dunia dan lingkungan.',
      tr: 'Farklı gök cisimlerinde ve ortamlarda yaşam aramak için kullanılan bilimsel yöntemleri karşılaştır.',
      zh: '比较科学家在不同星球和环境中寻找生命的方法。',
      ja: 'さまざまな天体や環境で生命を探す科学的な方法を比べよう。',
      ko: '다양한 천체와 환경에서 생명체를 찾는 과학적 방법을 비교해 보세요.',
      ar: 'قارن الأساليب العلمية للبحث عن الحياة في عوالم وبيئات مختلفة.',
      hi: 'अलग-अलग संसारों और पर्यावरणों में जीवन खोजने के वैज्ञानिक तरीकों की तुलना करें।',
      he: 'השווה שיטות מדעיות לחיפוש חיים בעולמות ובסביבות שונות.',
      vi: 'So sánh các phương pháp khoa học tìm kiếm sự sống trên những thế giới và môi trường khác nhau.',
    },
  },
});
