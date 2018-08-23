class Charity

  # require 'rubygems'
  # require 'http'
  require 'open-uri'
  require 'json'
  require 'net/http'

  def self.all(query)
  response = Net::HTTP.get_response(URI.parse('https://api.data.charitynavigator.org/v2/Organizations?app_id=' + ENV["APP_ID"] + '&app_key=' + ENV["API_KEY"] + '&pageSize=20' + query))
  response = response.body
  if response != "{\"errorMessage\":\"No organizations match your requirements\"}"
    response = JSON.parse(response)
    puts 'not panic mode'
    charities = []
    response.each do |charity|
      charities.push({
        "name" => charity["charityName"],
        "street_address" => charity["mailingAddress"]["streetAddress1"],
        "city" => charity["mailingAddress"]["city"],
        "zip" => charity["mailingAddress"]["postalCode"],
        "state" => charity["mailingAddress"]["stateOrProvince"],
        "category" => charity["irsClassification"]["nteeClassification"],
        "deductibility" => charity["irsClassification"]["deductibility"],
        "exemption" => charity["irsClassification"]["exemptOrgStatus"],
        "id" => charity["ein"]
        })
    end
  else
      puts 'panic mode'
    end
  return charities
end

def self.find(query)
  url = 'https://api.data.charitynavigator.org/v2/Organizations/' + query + '?app_id=' + ENV["APP_ID"] + '&app_key=' + ENV["API_KEY"]
  response = Net::HTTP.get_response(URI.parse(url))
  response = response.body
  if response != "{\"errorMessage\":\"No organizations match your requirements\"}"
    response = JSON.parse(response)
    puts response
    puts 'charity is here'
    final_answer =  {
      "name" => response["charityName"],
      "street_address" => response["mailingAddress"]["streetAddress1"],
      "city" => response["mailingAddress"]["city"],
      "zip" => response["mailingAddress"]["postalCode"],
      "state" => response["mailingAddress"]["stateOrProvince"],
      "category" => response["irsClassification"]["nteeClassification"],
      "deductibility" => response["irsClassification"]["deductibility"],
      "exemption" => response["irsClassification"]["exemptOrgStatus"],
      "id" => response["ein"]
    }
    return final_answer
    else
      puts 'panic mode'
    end
  end


end
