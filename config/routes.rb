Rails.application.routes.draw do
  get '/' => 'home#index'
  resources :users do
    resources :photos
    resources :follows do
      post '/follow' => 'follows#follow'
      post '/unfollow' => 'follows#unfollow'
    end
    resources :comments
  end

  resources :tags, only: [:create, :destroy]
  get '/log-in' => "sessions#new"
  post '/log-in' => "sessions#create"
  get '/log-out' => "sessions#destroy", as: :log_out

end
