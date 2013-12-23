class QuickContactsController < ApplicationController
  def create_quick_contact
    QuickContact.create(:name => params[:name], :email => params[:email], :message => params[:message])
    render :text => "Succeccfully updated"
  end

  def save_news_letters_email
        66666666
    puts "ssssssssssss"
    if Newsletter.create(:email => params[:email])
      puts "gggggg"
      render :text => "Succeccfully updated"
    else
      puts "hhhhhh"
      render :text => "Email is already taken"
    end

  end

end
