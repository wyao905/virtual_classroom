Rails.application.routes.draw do
  resources :enrollments
  resources :messages
  resources :students
  resources :instructors
  resources :lectures
  resources :subjects
  
  post '/sessions', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
