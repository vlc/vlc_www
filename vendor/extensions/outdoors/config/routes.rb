Refinery::Core::Engine.routes.append do

  # Frontend routes
  namespace :outdoors do
    resources :outdoors, :path => '', :only => [:index, :show]
  end

  # Admin routes
  namespace :outdoors, :path => '' do
    namespace :admin, :path => 'refinery' do
      resources :outdoors, :except => :show do
        collection do
          post :update_positions
        end
      end
    end
  end

end
