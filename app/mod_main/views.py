from flask import Blueprint, render_template, request

mod_main = Blueprint('main', __name__)


@mod_main.route('/', methods=['GET','POST'])
def index():
  if request.method == 'GET':
    return render_template('index.html')
  elif request.method == 'POST':
    return render_template('index.html')
