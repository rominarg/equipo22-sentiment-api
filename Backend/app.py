from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import re

app = FastAPI(title="API Sentimiento")

# Cargar modelo
modelo = joblib.load("modelo_sentimiento.joblib")

def limpiar_texto(text):
    text = str(text).lower()
    text = re.sub(r'http\S+', '', text)
    text = re.sub(r'@\w+', '', text)
    text = re.sub(r'#', '', text)
    text = re.sub(r'[^a-záéíóúñ\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

class TextoRequest(BaseModel):
    text: str

@app.post("/predict")
def predict(request: TextoRequest):
    texto_limpio = limpiar_texto(request.text)

    proba = modelo.predict_proba([texto_limpio])[0]
    prob_neg = float(proba[0])
    prob_pos = float(proba[1])

    if prob_pos >= prob_neg:
        return {
            "prevision": "Positivo",
            "probabilidad": round(prob_pos, 4)
        }
    else:
        return {
            "prevision": "Negativo",
            "probabilidad": round(prob_neg, 4)
        }
