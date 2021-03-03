require 'httparty'
require 'json'

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    r = HTTParty.get(
      'https://trefle.io/api/v1/species/search',
      query: {
        "q": "stickybob",
        "token": "X0QJXUfcbDt6ftn-IkC4YkkpIDIvt_59l9l6KbEyDnQ"
      }
    )
    # token = 'X0QJXUfcbDt6ftn-IkC4YkkpIDIvt_59l9l6KbEyDnQ'
    # query = 'coconut'
    # JSON.parse("https://trefle.io/api/v1/plants/search?token=#{token}&q=#{query}")

    @plants = r.parsed_response['data']

  end
end
