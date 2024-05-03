from flask import Flask, render_template
app = Flask(__name__)


@app.route('/it')
@app.route('/')
def home():
  return render_template('homeMeteo.html', title='Meteo',sottotitolo=' Il meteo per tutti, disponibile 24h su 24h a tua disposizione ',inserimento='Inserisci qua il la città desiderata', cerca='Cerca')

@app.route('/en')
def homeen():
  return render_template('homeMeteo.html', title='Weather forecast',sottotitolo='The weather for everyone, available 24 hours a day at your disposal',inserimento='Enter the desired city here', cerca='Search')

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)