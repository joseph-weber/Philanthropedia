Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
# Routes for users
  get '/users', to: 'users#index'
  get '/users/find/:username', to: 'users#showName'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#delete'

# Routes for favorites
  post '/favorites', to: 'favorites#create'
  delete '/favorites/:user_id/:id', to: 'favorites#delete'

# Routes for charities
  get '/charities/:query', to: 'charities#index'
  get '/charities/find/:query', to: 'charities#show'


# routes for crises
  get '/crises/', to: 'crises#index'
  post '/crises/', to: 'crises#create'


end
