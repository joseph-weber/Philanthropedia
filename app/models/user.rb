class User
  DB = PG.connect(host: "localhost", port: 5432, dbname: 'Philanthropedia_development')


  def self.all
    results = DB.exec(
      <<-SQL
      SELECT * FROM users
      SQL
    )
    results.each do |result|
      {
        "id" => result["id"].to_i,
        "username" => result["username"],
        "password" => result["password"]
      }
    end
  end


  def self.findByName(name)
    results = DB.exec(
      <<-SQL
        SELECT *
        FROM users
        WHERE username = #{name};
      SQL
    )
    results = results.first
    return {
      "id" => results["id"].to_i,
      "username" => results["username"],
      "password" => results["password"]
    }
  end

  def self.create(opts)
    results = DB.exec(
        <<-SQL
            INSERT INTO users (username, password)
            VALUES ( #{opts["username"]}, #{opts["password"]})
            RETURNING id, username, password;
        SQL
    )
    return {
        "id" => results.first["id"].to_i,
        "username" => results.first["username"],
        "password" => results.first["password"]
    }
  end



end
