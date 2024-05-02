from flask import Flask, render_template
app = Flask(__name__)


@app.ruote('/it')
@app.route('/')
  def home():
    return render_template('homeMeteo', title='Meteo',sottotitolo=' Il meteo per tutti, disponibile 24h su 24h a tua disposizione ',inserimento='Inserisci qua il la città desiderata', cerca='Cerca')















if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3246, debug=True)