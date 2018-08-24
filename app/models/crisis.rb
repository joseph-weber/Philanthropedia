class Crisis
  if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'Philanthropedia_development')
    end

def self.all
  results = DB.exec(
    <<-SQL
    SELECT * FROM crises
    ORDER BY id DESC
    LIMIT 2
    SQL
  )
  results.each do |result|
    {
      "id" => result["id"].to_i,
      "zip" => result["zip"].to_i,
      "crisis_name" => result["crisis_name"],
      "state" => result["username"],
      "category" => result["category"]
    }
  end
end


  def self.create(opts)
    results = DB.exec(
      <<-SQL
      INSERT INTO
        crises  (crisis_name, zip, city, state, category)
      VALUES ('#{opts["crisis_name"]}', #{opts["zip"]}, '#{opts["city"]}', '#{opts["state"]}', #{opts["category"]})
      RETURNING id, crisis_name, zip, city, state, category;
    SQL
  )
  return {
    "id" => results.first["id"].to_i,
    "crisis_name" => results.first["crisis_name"],
    "zip" => results.first["zip"].to_i,
    "city" => results.first["city"],
    "state" => results.first["state"],
    "category" => results.first["category"].to_i
  }
  end









end
