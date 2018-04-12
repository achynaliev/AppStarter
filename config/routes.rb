Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [ :create, :index, :show, :update ]
    resources :rewards, only: [ :index ]
    resources :backings, only: [ :create, :destroy ]
    resources :project_searches, only: [ :index ]
    resources :likes, only: [ :create, :destroy ]
    resources :recommended, only: [ :index ]
  end
end
