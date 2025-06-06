import json
import sqlite3

# Charger le JSON
with open("cff_stations.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Connexion ou création de la base SQLite
conn = sqlite3.connect("yagan.db")
cursor = conn.cursor()

# Créer la table pour les stations
cursor.execute('''
               CREATE TABLE IF NOT EXISTS stations (
                                                       id TEXT PRIMARY KEY,
                                                       name TEXT,
                                                       lat REAL,
                                                       lon REAL,
                                                       type TEXT
               )
               ''')

# Insérer les données
for entry in data:
    cursor.execute('''
        INSERT OR REPLACE INTO stations (id, name, lat, lon, type)
        VALUES (?, ?, ?, ?, ?)
    ''', (
        entry["id"],
        entry["name"],
        entry["lat"],
        entry["lon"],
        entry["type"]
    ))

conn.commit()
conn.close()
print("Import terminé avec succès.")
