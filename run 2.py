from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def index():
  if request.method == 'GET':
    return render_template('index2.html')
  elif request.method == 'POST':
    return render_template('index2.html')

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', port=5555)
