from flask import Flask, render_template
import random

app = Flask(__name__)

quotes = [
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "There are 10 kinds of people. Those who know binary and those who don't.",
  "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  "It is pitch dark. You are likely to be eaten by a grue."
]

@app.route("/")
def index():
  random_quote = random.choice(quotes)
  repo_link = "https://github.com/wamikapsa/containersdeployment"
  image_url = "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/124714084/original/24de34c6a03f529096a96650d86b83b27aa30406/send-20-high-quality-4k-random-wallpapers.jpg"  # random placeholder image
  return render_template("index.html", quote=random_quote, repo=repo_link, image=image_url)

if __name__ == "__main__":
  app.run(debug=True)
