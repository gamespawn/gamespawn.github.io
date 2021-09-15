# Official Gamespawn @ UCR Website
Welcome to the repo hosting Gamespawn's official website! Follow the link to our site below:
https://gamespawn.github.io/

![Thumbnail](thumbnail.png)


## Getting Started
### Prerequisites
- Ruby version 2.4.0 or higher, check Ruby version using `ruby -v`
- RubyGems, check version using `gem -v`
- GCC and Make, check version using `gcc -v`, `g++ -v`, and `make -v`
- See [Jekyll's Official Website](https://jekyllrb.com/docs/installation/#requirements) for more detailed information

### Build the site and run on your local server
- In the repo folder, create a Gemfile: `bundle init`

- Populate the Gemfile with Jekyll: `bundle add jekyll`

- Build the site and make it available on a local server: `bundle exec jekyll serve`

- Browse to [http://localhost:4000](http://localhost:4000).

#### Troubleshooting

- If the terminal shows `bundler: command not found: jekyll` when running `bundle exec jekyll serve`, try run this command to install gem in another location: `sudo gem install -n /usr/local/bin jekyll`. See this SO thread for more info: [Jekyll - command not found](https://stackoverflow.com/questions/8146249/jekyll-command-not-found)

