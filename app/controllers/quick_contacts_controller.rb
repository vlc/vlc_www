class QuickContactsController < ApplicationController
  def create_quick_contact
    QuickContact.create(:name => params[:name], :email => params[:email], :message => params[:message])
    render :text => "Succeccfully updated"
  end

  def save_news_letters_email
    @newsletter = Newsletter.create(:email => params[:email])
    if @newsletter.save
      render :text => "Succeccfully updated"
    else
      render :text => "Email is already taken"
    end
  end

end
