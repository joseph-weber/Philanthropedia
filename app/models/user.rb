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
        SELECT
          users.*,
          favorites.user_id,
          favorites.charity_id,
          favorites.charity_name
        FROM users
        LEFT JOIN
          favorites
        ON users.id = favorites.user_id
        WHERE username = #{name};
      SQL
    )
    favorites = []
    results.each do |result|
      favorites.push({
        "name" => result["charity_name"],
        "id" => result["charity_id"],
      })
    end
    results = results.first
    return {
      "id" => results["id"].to_i,
      "username" => results["username"],
      "password" => results["password"],
      "favorites" => favorites
    }
  end

  def self.create(opts)
    results = DB.exec(
        <<-SQL
            INSERT INTO users (username, password)
            VALUES ( '#{opts["user_name"]}', '#{opts["password"]}')
            RETURNING id, username, password;
        SQL
    )
    return {
        "id" => results.first["id"].to_i,
        "user_name" => results.first["username"],
        "password" => results.first["password"]
    }
  end





end
