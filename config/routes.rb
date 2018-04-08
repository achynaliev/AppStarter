Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [ :create, :index, :show, :update ]
    resources :reward, only: [ :index ]
    resources :backing, only: [ :create, :destroy ]
  end
end
