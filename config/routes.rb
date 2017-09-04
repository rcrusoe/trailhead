Rails.application.routes.draw do
    root 'pages#index'
    get 'features', to: "pages#features"
end
