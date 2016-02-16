class HomeController < ApplicationController
  def index
    @action = session[:action]
  end

  def action
      check = params[:check]
      session[:action] = check
      render text: check
  end
end
