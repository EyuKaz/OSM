**🌟 Welcome to the OpenStreetMap Block! 🌟**  
*A Gutenberg block that sometimes embeds a map, sometimes embeds chaos. Use at your own risk (but mostly fun).*  

---

## 🗺️ **What Is This?**  
This block *tries* to embed an interactive OpenStreetMap in your WordPress editor. It *attempts* to let you search addresses. It *pretends* to work flawlessly. It’s like a toddler with a GPS—adorable but unpredictable.  

*Perfect for:*  
- People who love debugging more than their morning coffee ☕  
- Fans of “Why is it doing that?!” moments 🤔  
- Open-source masochists who enjoy yelling at `node_modules` 📦  

---

## 🚀 **Installation**  
*Because suffering is optional, but npm errors are mandatory:*  

1. **Download this repo** (or clone it if you’re fancy):  
   ```bash  
   git clone https://github.com/EyuKaz/OSM.git  
   ```  
2. **Install dependencies** (and pray to the npm gods):  
   ```bash  
   cd openstreetmap-block  
   npm install  
   ```  
3. **Build the plugin** (cross your fingers, toes, and eyes):  
   ```bash  
   npm run build  
   ```  
4. **Zip the `build/` folder** and upload it to WordPress via *Plugins → Add New → Upload*.  
5. **Activate the plugin** and prepare for adventure!  

---

## 🎮 **Usage**  
1. **Add the block** to a post/page.  
2. **Search for an address** (e.g., “Eiffel Tower” or “My existential dread”).  
3. **Watch in awe** as the map *maybe* loads, *maybe* crashes, or *maybe* summons a demon.  

---

## 🔥 **Common Issues (Why It Might Hate You)**  
*We faced these. You’ll face these. Let’s bond over trauma:*  

### **1. “Why does the map look like a blank void?”**  
- **Likely Cause:** Leaflet’s CSS/JS aren’t loading.  
- **Fix:** Check if your theme’s `functions.php` enqueues Leaflet’s assets. If not, cry softly.  

### **2. “The block says ‘hello from the editor!’ but does nothing.”**  
- **Likely Cause:** The block’s React components aren’t registered properly.  
- **Fix:** Yell, “WHY AREN’T YOU WORKING?!” Then rewrite `index.js`.  

### **3. “npm install exploded into confetti errors.”**  
- **Likely Cause:** React 18 vs. React 19 drama. Or Webpack’s midlife crisis.  
- **Fix:** Run `npm install --legacy-peer-deps` and pretend you’re in control.  

### **4. “The search bar is just for decoration, right?”**  
- **Likely Cause:** Nominatim API rate limits or broken geocoding logic.  
- **Fix:** Sacrifice a keyboard to the open-source gods.  

---

## 🛠️ **Contributing**  
*Help us fix this glorious mess!*  

1. **Fork this repo** (because you’re a hero).  
2. **Fix something** (anything! even a typo counts).  
3. **Submit a PR** with a title like: *“I have no idea what I’m doing but here’s a GIF of a cat.”*  


---

## 📜 **License**  
This project is licensed under **GPL-2.0**. Translation: Do whatever you want, but don’t sue us if your website turns into a black hole.  

---

**🎉 Thanks for Stopping By!**  
May your maps load, your code compile, and your coffee stay strong.  

*– The Maintainer Who’s Probably Asleep* 😴
