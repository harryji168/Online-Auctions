Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions, only:[:create, :index, :show,  :update ] do
        resources :bids, only:[:create]
      end
      resource :session, only:[:create, :destroy]
      get("/current_user", to:"sessions#get_current_user")
      resources :users, only:[:create]
    end
  end
end
