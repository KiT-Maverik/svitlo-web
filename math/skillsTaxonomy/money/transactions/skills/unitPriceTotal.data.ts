import { buildSkillConfig } from '@/utils';
import { transactions_Skills_Ids } from './index.ids';

export const unitPriceTotal_Skill_Data = buildSkillConfig({
  id: transactions_Skills_Ids.unitPriceTotal,
  name: {
    en: 'Calculating total cost from unit price and quantity',
    zh: '根据单价和数量计算总价',
    hi: 'इकाई मूल्य और मात्रा से कुल लागत निकालना',
    es: 'Calcular el coste total a partir del precio unitario y la cantidad',
    ar: 'حساب التكلفة الإجمالية من سعر الوحدة والكمية',
    fr: 'Calculer le coût total à partir du prix unitaire et de la quantité',
    bn: 'একক মূল্য ও পরিমাণ থেকে মোট দাম হিসাব করা',
    pt: 'Calcular o custo total a partir do preço unitário e da quantidade',
    ur: 'فی اکائی قیمت اور مقدار سے کل قیمت نکالنا',
    id: 'Menghitung biaya total dari harga satuan dan jumlah barang',
    de: 'Gesamtkosten aus Stückpreis und Menge berechnen',
    ja: '単価と数量から合計金額を計算する',
    ko: '단가와 수량으로 총비용 계산하기',
    tr: 'Birim fiyat ve miktardan toplam maliyeti hesaplama',
    vi: 'Tính tổng tiền từ đơn giá và số lượng',
    ta: 'அலகு விலை மற்றும் எண்ணிக்கையிலிருந்து மொத்த விலையைக் கணக்கிடுதல்',
    te: 'యూనిట్ ధర మరియు పరిమాణం నుంచి మొత్తం ఖర్చును లెక్కించడం',
    mr: 'एकक किंमत आणि संख्येवरून एकूण खर्च काढणे',
    ms: 'Mengira jumlah kos daripada harga seunit dan kuantiti',
    he: 'חישוב העלות הכוללת לפי מחיר ליחידה וכמות',
    pl: 'Obliczanie łącznego kosztu na podstawie ceny jednostkowej i liczby sztuk',
    uk: 'Обчислення загальної вартості за ціною та кількістю',
  },
});
