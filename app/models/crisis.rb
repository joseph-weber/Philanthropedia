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
      "state" => result["username"],
      "category" => result["category"]
    }
  end
end


  def self.create(opts)
    results = DB.exec(
      <<-SQL
      INSERT INTO
        crises  (zip, city, state, category)
      VALUES (#{opts["zip"]}, '#{opts["city"]}', '#{opts["state"]}', #{opts["category"]})
      RETURNING id, zip, city, state, category;
    SQL
  )
  return {
    "id" => results.first["id"].to_i,
    "zip" => results.first["zip"].to_i,
    "city" => results.first["city"],
    "state" => results.first["state"],
    "category" => results.first["category"].to_i
  }
  end









end
