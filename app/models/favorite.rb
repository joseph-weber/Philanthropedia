class Favorite
  if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'Philanthropedia_development')
    end

  def self.create(opts)
    puts 'hello'
    puts opts
    results = DB.exec(
      <<-SQL
        INSERT INTO favorites (user_id, charity_id, charity_name)
        VALUES (#{opts["user_id"]}, #{opts["charity_id"]}, '#{opts["charity_name"]}')
        RETURNING id, user_id, charity_id, charity_name;
        SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "user id" => results.first["user_id"].to_i,
      "charity id" => results.first["charity_id"].to_i,
      "charity name" => results.first["charity_name"]
    }
  end

  def self.delete(user_id, id)
    results = DB.exec("DELETE FROM favorites WHERE user_id=#{user_id} and charity_id=#{id};")
    return {"deleted" => true}
  end

end
