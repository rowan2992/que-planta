Rails.application.routes.draw do
  # get 'homepage/index'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

# Rails.application.routes.draw do
#   root 'homepage#index'
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
# end