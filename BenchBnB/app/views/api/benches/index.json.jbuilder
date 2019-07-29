
@benches.each do |bench|
  json.set! bench.id do 
    json.extract! bench, :description, :id, :lat, :lng
  end
end
