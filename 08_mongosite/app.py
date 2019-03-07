from flask import Flask, render_template, request
app = Flask(__name__) # instantiates an instance of Flask

@app.route("/") #Linking a function to a route
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.debug = True
    app.run()
