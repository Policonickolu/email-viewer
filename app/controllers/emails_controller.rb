class EmailsController < ApplicationController

  def index
    @emails = Email.all;
  end

  def show
    respond_to do |format|
      @email = Email.find(params[:id])
      format.json { render json: @email }
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def email_params
      params.require(:email).permit(:object, :body)
    end

end
