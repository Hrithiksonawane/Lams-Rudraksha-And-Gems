// DATA ONLY. Columns: name, planet, base color, light color, tagline, [benefits], price (₹)
const rows = [
  ["Ruby (Manik)","Sun","#c8102e","#ff5a6e","Confidence & leadership",["Boosts authority and vitality","Supports career recognition"],8999],
  ["Pearl (Moti)","Moon","#d9d2c3","#ffffff","Calm mind & balance",["Soothes stress and anger","Supports peaceful sleep"],2499],
  ["Red Coral (Moonga)","Mars","#c23a1c","#ff8a5c","Courage & energy",["Builds strength and drive","Supports bold action"],1999],
  ["Emerald (Panna)","Mercury","#0e8a52","#5fe0a0","Intelligence & speech",["Sharpens the mind","Supports business and learning"],4999],
  ["Yellow Sapphire (Pukhraj)","Jupiter","#d9a300","#ffe27a","Wisdom & prosperity",["Supports good fortune","Brings knowledge and growth"],7999],
  ["Diamond (Heera)","Venus","#9fc6e6","#ffffff","Luxury, love & harmony",["Enhances charm and comfort","Supports relationships"],12999],
  ["Blue Sapphire (Neelam)","Saturn","#1f3fa8","#6f93ff","Discipline & focus",["Supports steady progress","Wear only after astrologer advice"],9999],
  ["Hessonite (Gomed)","Rahu","#a8541a","#e8955a","Clarity & protection",["Reduces confusion","Supports focus in change"],2999],
  ["Cat's Eye (Lehsunia)","Ketu","#6b7a2a","#c7d76a","Intuition & protection",["Shields from negativity","Supports spiritual growth"],3999],
];
export const gemstones = rows.map(([name, planet, base, light, tagline, benefits, price], i) => ({
  id: `g${i}`, type: "gemstone", name, subtitle: `Planet · ${planet}`, tagline,
  benefits: [...benefits, "Natural gemstone"], price, art: { kind: "gem", base, light },
}));
