# 🏫 Lede Project 3

This is the third project I’ve completed as part of the [Lede](https://yuta-uebayashi.github.io/Lede-Project3/) program.

## 📌 Title

**Analysis of the Number of Students per Elementary School**  
_One in Five Municipalities Has Elementary Schools with Fewer Than 100 Students on Average_

---

## 🎯 Project Goal

This project investigates the current state of Japan’s elementary schools, which are steadily declining in number due to a falling birthrate and aging population.  
Through interactive maps and visual storytelling, it highlights the widening educational divide and growing concerns about disaster preparedness.

---

## 🔍 Key Findings

- Over 20% of municipalities have an average of fewer than 100 students per elementary school.
- In contrast, some areas near Tokyo have over 600 students per school due to rapid population growth.
- Rural regions, especially in Tohoku, have experienced widespread school closures over the past decade.
- In Kita-Akita City, repeated school closures have created areas where children must walk up to five hours to reach the nearest school.
- "Hard-to-access zones" — areas located more than 4 km from the nearest school — have increased by 8 percentage points over the past decade, now covering more than half of Tohoku.
- School closures affect not only education but may also undermine disaster preparedness, as school buildings often serve as evacuation shelters.
- Classrooms operated by a nationwide cram school chain are increasingly concentrated in major cities like Tokyo and Osaka, widening the gap in access to after-school education.

---

## 🗺️ Data Analysis and Mapping Process

- Used 2013 and 2023 data from Japan’s Ministry of Education on school locations and student enrollment.
- Cleaned and processed the raw data using Python, including regular expressions and pandas. Then used QGIS to map "hard-to-access zones" in the Tohoku region.
- Retrieved satellite imagery of Kita-Akita City from the Copernicus Open Access Hub and mapped the locations of existing and closed elementary schools. The map was refined in Adobe Illustrator for color, typography, and overall presentation.
- Scraped address data for all classrooms operated by a nationwide cram school chain from the company’s official website, enriched it with latitude and longitude information, and visualized the results on the map.
- Used Mapbox to build an interactive map-based presentation.
- Collected data on all earthquakes with strong shaking since 2000 from the Japan Meteorological Agency and visualized them using QGIS and Mapbox.

---

## 💡 Skills and Growth

Through this project, I developed skills in:

- Web-based mapping using Mapbox  
- Geospatial analysis with QGIS  
- Data cleaning with pandas and regular expressions  
- Web scraping and geocoding address data  
- Designing and building interactive, easy-to-understand storytelling using JavaScript and HTML  
- Retrieving satellite imagery and integrating it into the project using QGIS and Adobe Illustrator  

---

📸 **Credits:**  
Photos used in this project were obtained from Nikkei. Satellite imagery was sourced from the Copernicus Open Access Hub.