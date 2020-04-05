Rails.application.routes.draw do
  resources :enrollments
  resources :messages
  resources :students
  resources :instructors
  resources :lectures
  resources :subjects
  resources :session, only: [:create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
