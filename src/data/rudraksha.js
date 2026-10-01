// DATA ONLY. To add or edit a Rudraksha, change a row. Columns:
// mukhi, deity/planet, tagline, [3 benefits], category, price (₹)
const rows = [
  [1,"Lord Shiva · Sun","Focus & spiritual clarity",["Sharpens concentration","Boosts leadership","Supports deep meditation"],"spiritual",2999],
  [2,"Ardhanarishvara · Moon","Harmony in relationships",["Calms the mind","Strengthens bonds","Eases emotional stress"],"peace",999],
  [3,"Agni · Mars","Energy & fresh starts",["Releases guilt and fear","Builds confidence","Boosts vitality"],"power",799],
  [4,"Brahma · Mercury","Creativity & learning",["Improves memory","Great for students","Enhances communication"],"power",699],
  [5,"Kalagni Rudra · Jupiter","Peace & well-being",["Brings calm and balance","Suits everyone, daily wear","Supports overall health"],"peace",499],
  [6,"Kartikeya · Venus","Willpower & courage",["Strengthens determination","Improves discipline","Attracts charm & success"],"power",899],
  [7,"Mahalakshmi · Saturn","Wealth & prosperity",["Invites financial stability","Eases money worries","Brings new opportunities"],"wealth",1299],
  [8,"Lord Ganesha · Rahu","Removes obstacles",["Clears hurdles in work","Brings wisdom","Protects new ventures"],"wealth",1999],
  [9,"Goddess Durga · Ketu","Fearlessness & energy",["Boosts courage","Protection from negativity","Fuels determination"],"power",1499],
  [10,"Lord Vishnu","Protection & safety",["Shields from negativity","Brings security","Calm in the home"],"peace",1799],
  [11,"Hanuman · Eleven Rudras","Courage & strength",["Builds inner strength","Supports bold decisions","Brings fearlessness"],"power",2499],
  [12,"Surya · Sun God","Leadership & radiance",["Boosts confidence","Supports career growth","Brings vitality"],"wealth",2999],
  [13,"Kamadeva · Venus","Attraction & charisma",["Enhances charm","Supports harmony in love","Fulfils desires"],"wealth",3499],
  [14,"Hanuman · Saturn","Intuition & protection",["Sharpens intuition","Strong spiritual shield","Supports inner awakening"],"spiritual",3999],
];
export const rudraksha = rows.map(([mukhi, subtitle, tagline, benefits, category, price]) => ({
  id: `r${mukhi}`, type: "rudraksha", name: `${mukhi} Mukhi Rudraksha`, subtitle, tagline,
  benefits, category, price, art: { kind: "bead", mukhi },
  // photo: "images/5-mukhi.jpg"   ← add your real photo (put the file in /public/images)
}));
export const categories = [["all","All"],["peace","Peace"],["power","Power & Focus"],["wealth","Wealth & Success"],["spiritual","Spiritual"]];
