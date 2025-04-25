from flask import Flask
from threading import Thread

app = Flask('')

@app.route('/')
def home():
    return "Tail Time!"

def run():
  app.run(host='0.0.0.0',port=2905)

def keep_alive():  
    t = Thread(target=run)
    t.start()