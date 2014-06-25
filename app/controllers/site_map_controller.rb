class SiteMapController < ApplicationController

  def index
    @pages = Refinery::Page.where(parent_id:nil)
    respond_to do |format|
      format.html {render :layout => false}
    end
  end

end
